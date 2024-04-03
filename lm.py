# %%
import matplotlib.pyplot as plt
import numpy as np

from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score

# Following a demo from https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html

# %%
diabetesX,diabetesY = datasets.load_diabetes(return_X_y=True)
print(diabetesX.shape)
print("diabetesX entries: ", diabetesX[0:5,])
print(diabetesY.shape)
print("diabetesY entries: ", diabetesY[0:5])

# %%
## This means that diabetesX has 10 variates for the input. For now, we will only use one of them.
diabetesX = diabetesX[:, np.newaxis, 2]

# %%
# Now let's see what our model looks like
plt.scatter(diabetesX, diabetesY, color='black')
plt.show()

# %%
# Fit a linear regression model
regr = linear_model.LinearRegression()
regr.fit(diabetesX, diabetesY)

# Plot the model
plt.scatter(diabetesX, diabetesY, color='black')
plt.plot(diabetesX, regr.predict(diabetesX), color='blue', linewidth=3)
plt.show()


# %%
# visualize residuals
plt.scatter(diabetesX, diabetesY, color='black')
plt.plot(diabetesX, regr.predict(diabetesX), color='blue', linewidth=3)

# plt.plot([0,300],[0,300], color = 'red')
for i in range(10):
    plt.plot([diabetesX[i], diabetesX[i]], [diabetesY[i], regr.predict(diabetesX)[i]], color='red')
    # make the points a special colour
    plt.scatter(diabetesX[i], diabetesY[i], color='pink')
plt.show()

# %%
print("The mean squared error is: ", mean_squared_error(diabetesY, regr.predict(diabetesX)))

# %%



