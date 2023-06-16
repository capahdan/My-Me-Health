# Capstone Project ID	: C23-PC650
## Team Member
| Name | Bangkit-ID | Learning Path | Github-Profile |
| ------ | ------ | ------- | ------- |
| Daniel Reinhard Capah | C130DSX0636 | Cloud Computing | [Github](https://github.com/capahdan) |
| Rinda Ismawati | C372DSY0852 | Cloud Computing | [Github](https://github.com/Rinda27) |
| Priskila | M295DSY1784 | Machine Learning | [Github](https://github.com/KaylaGs) |
| David Vijanarco Martal | M013DSX1588 | Machine Learning  | Github |
| Ashaddam Agashi Amura Dese | M151DSX3110 | Machine Learning | Github |
| Fadhil Prawira | A166DKX3875| Mobile Development | Github |

## Repositories
|    Branch Name     |                                      Branch Link                                         |
| :----------------: | :--------------------------------------------------------------------------------------: |
| Machine Learning | [ML Branch](https://github.com/capahdan/My-Me-Health/tree/ML-branch) |
|  Cloud Computing   | [CC Branch](https://github.com/capahdan/My-Me-Health/tree/main) |
|  Mobile Development | MD Branch |

## Project Documents:
- Project Brief: [Dokumen]( )

- Final Presentation:  [Presentation]( )
- link Youtube presentation:

# MyMe Health App
The MyMe-Health application is created to allow users to detect mental health problems through the mobile application they use. By taking the test, users will get results related to their mental health, through the application that we have created, users will take The Patient Health Questionnaire-9 (PHQ-9) mental health test.

## MyMe Health App Features
- Test
- Articel

## About The Project
Mental health issues have become an important issue today. Many cases of mental health disorders have resulted in suicide. Therefore, it is very important to detect mental health problems early on, so that they can be treated appropriately. From our research, based on journals, papers, and even existing applications, mental health detection is still limited, especially in Indonesia. So, we decided to choose this project theme to help increase awareness of mental health among the Indonesian public and assist in the early detection of mental health problems.

# Machine Learning Documentation
1.	Imports necessary libraries: pandas, numpy, train_test_split, StandardScaler, PCA, DecisionTreeClassifier, accuracy_score, and classification_report from scikit-learn.
2.	Reads a CSV file named 'PHQ9_Results.csv' into a pandas DataFrame (df).
3.	The code checks for missing values in the DataFrame by calculating the sum of missing values for each column and storing it in the variable missing_values.
4.	It prints the DataFrame to display the data.
5.	If there are any missing values (if missing_values.any() evaluates to True), it prints the message "Telah ditemukan data yang hilang" (missing data has been found). Otherwise, it prints "Tidak ada data yang hilang" (no missing data).
6.	The code selects specific columns ('DPQ010' to 'DPQ090') as features (X) and the 'Total' column for the target variable (y). It performs binning on the 'Total' column using specific bin boundaries and assigns labels to each bin.
7.	Splits the data into training and testing sets using the train_test_split function, with 80% of the data used for training and 20% for testing. The random_state parameter is set to 42 for reproducibility.
8.	The code initializes a StandardScaler object and uses it to scale the training and testing features (X_train and X_test).
9.	It applies Principal Component Analysis (PCA) on the scaled features to reduce dimensionality. First, it performs PCA without specifying the number of components to capture all possible principal components. Then, it calculates the explained variance ratio and cumulative variance. It determines the number of components required to explain at least 95% of the variance and assigns it to the variable n_components.
10.	The code performs PCA again with the determined number of components and transforms the scaled features (X_train_pca and X_test_pca).
11.	Creates a DecisionTreeClassifier object, fits it to the training data (X_train_pca and y_train), and predicts the labels for the testing data (X_test_pca) using the trained model.
12.	Calculates the accuracy of the predictions by comparing them to the true labels (y_test) using the accuracy_score function. It also generates a classification report using the classification_report function, which provides precision, recall, F1-score, and support for each class.
13.	The accuracy and classification report are printed to the console.
14.	The code imports Flask and send_file from the flask module for building a web application.
15.	Initializes a Flask application.
16.	Defines a route '/download' that, when accessed, returns a file as an attachment. The path to the file is specified as 'model.json'.
17.	Runs the Flask application if the script is executed directly.

# Mobile Development Documentation




# Cloud Computing Documentation
## 1. Setup Google Cloud
- Enable Cloud Run and Cloud Build API

## 2. Clone this Project
```
git clone https://github.com/capahdan/My-Me-Health.git
cd My-Me-Health
```
## 3. Build Container and Upload To Google Container Registry
```
gcloud builds submit   --tag gcr.io/$GOOGLE_CLOUD_PROJECT/myme-health:0.1
```
## 4. Deploy using Cloud Run
```
gcloud run deploy my-me-api   --image gcr.io/$GOOGLE_CLOUD_PROJECT/myme-health:0.1   --platform managed   --region asia-southeast2   --allow-unauthenticated   --max-instances=2
```

## 5. Test
    curl the link that you get from the previous step
 ## Deployment Link
[API deployment](https://my-me-api-7qon5jxieq-et.a.run.app)
 ## API Documentation Enpoint:
API Documentation Enpoint : [Endpoint](https://my-me-api-7qon5jxieq-et.a.run.app/docs)








