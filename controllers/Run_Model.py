# Developer Prince - Concrete Compressive Strength Regression Machine Learning Demo
""" This is Regression problem which make use of Data set with 8 Features inorder to Determine Concrete Compressve Strength(MPa, Mega Pascals) """

from __future__ import print_function, absolute_import, division

import pandas as pd
#import matplotlib.pyplot as plt
import tensorflow as tf 
from tensorflow import keras
import sys

def main():
    if len(sys.argv) == 10:

        if sys.argv[1] == 'compile':
            test_data = [int(sys.argv[2]), int(sys.argv[3]),int(sys.argv[4]),int(sys.argv[5]),int(sys.argv[6]),int(sys.argv[7]),int(sys.argv[8]),int(sys.argv[9])]

            CCST_model = tf.keras.models.load_model('CCST_predictor.model')

            predictions = CCST_model.predict(x=test_data)

            print(predictions)
if __name__ == '__main__':
	main()