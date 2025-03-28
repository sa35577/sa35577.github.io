#include <iostream>
#include <thread>
#include <chrono>
#include <string>

constexpr long long ITERATIONS = 100'000'000;

// Struct that causes false sharing
struct FalseSharing {
    long long x;
    long long y;
};

// Struct that avoids false sharing
struct NoFalseSharing {
    long long x;
    char padding[128 - sizeof(long long)];
    long long y;
    char padding2[128 - sizeof(long long)];
};

// Thread function to increment a specific field
template <typename T>
void increment_field(T& data, long long T::*field) {
    for (long long i = 0; i < ITERATIONS; ++i) {
        data.*field += 1;
    }
}

// Runs two threads incrementing two separate fields of the struct
template <typename T>
double run_test(T& data, long long T::*field1, long long T::*field2) {
    auto start = std::chrono::high_resolution_clock::now();

    std::thread t1(increment_field<T>, std::ref(data), field1);
    std::thread t2(increment_field<T>, std::ref(data), field2);

    t1.join();
    t2.join();

    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = end - start;
    return elapsed.count();
}

void run_false_sharing() {
    FalseSharing data{0, 0};
    double elapsed = run_test(data, &FalseSharing::x, &FalseSharing::y);
    std::cout << "False sharing time: " << elapsed << "s\n";
}

void run_no_false_sharing() {
    NoFalseSharing data{0, {}, 0};
    double elapsed = run_test(data, &NoFalseSharing::x, &NoFalseSharing::y);
    std::cout << "No false sharing time: " << elapsed << "s\n";
}

int main(int argc, char* argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: ./demo [false|no-false]\n";
        return 1;
    }

    std::string mode = argv[1];

    if (mode == "false") {
        std::cout << "=== Running False Sharing Demo ===\n";
        run_false_sharing();
    } else if (mode == "no-false") {
        std::cout << "=== Running No False Sharing Demo ===\n";
        run_no_false_sharing();
    } else {
        std::cerr << "Invalid argument. Use 'false' or 'no-false'.\n";
        return 1;
    }

    return 0;
}

