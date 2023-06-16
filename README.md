# Capstone Project ID	: C23-PC650
## Team Member
| Name | Bangkit-ID | Github-Profile |
| ------ | ------ | ------- |
| Daniel Reinhard Capah | C130DSX0636 | [Github](https://github.com/capahdan) |
| Rinda Ismawati | C372DSY0852 | [Github](https://github.com/Rinda27) |
| Priskila | M295DSY1784 | [Github](https://github.com/KaylaGs) |
| David Vijanarco Martal | M013DSX1588 | Github |
| Ashaddam Agashi Amura Dese | M151DSX3110 | Github |
| Fadhil Prawira | A166DKX3875 | Github |

## Repositories
|    Branch Name     |                                      Branch Link                                         |
| :----------------: | :--------------------------------------------------------------------------------------: |
| Machine Learning | [ML Branch](https://github.com/capahdan/My-Me-Health/tree/ML-branch) |
|  Cloud Computing   | [CC Branch](https://github.com/capahdan/My-Me-Health/tree/main) |
|  Mobile Development | MD Branch |

# MyMe Health App
The MyMe-Health application is created to allow users to detect mental health problems through the mobile application they use. By taking the test, users will get results related to their mental health, through the application that we have created, users will take The Patient Health Questionnaire-9 (PHQ-9) mental health test.

## MyMe Health App Features
- Test
- Articel

## About The Project
Mental health issues have become an important issue today. Many cases of mental health disorders have resulted in suicide. Therefore, it is very important to detect mental health problems early on, so that they can be treated appropriately. From our research, based on journals, papers, and even existing applications, mental health detection is still limited, especially in Indonesia. So, we decided to choose this project theme to help increase awareness of mental health among the Indonesian public and assist in the early detection of mental health problems.

# Machine Learning Documentation




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








