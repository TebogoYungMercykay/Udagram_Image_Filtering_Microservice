# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## The project is split into three parts:
- ### `The Frontend`:
   - [Link to Code](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   - A basic Ionic client web application which consumes the RestAPI Backend.
- ### `RestAPI Backend`:
    - [Link to Code](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi)
    - Node-Express server which can be deployed to a cloud service.
- ### `The Image Filtering Microservice`:
    - [Link to Code](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code)
    - The final project for the course. It is a Node-Express application which runs a simple script to process images.
    
        ---

---

### Project Instructions:
- #### `New Endpoint:`
    - Create a new endpoint in the server.ts file
    - The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

- #### `Importing the New Endpoint:`
    - Importing it for you at the top of the `./src/server.ts`  file.
    -   ```typescript
        import {filterImageFromURL, deleteLocalFiles} from './util/util';
        ```

---

### Starter Code:
- [Link to Code](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code)
- The starter code was created by Udacity members

### Perequisite 1 (Installations)
- Git Installation:
    - [Link](https://www.youtube.com/watch?v=4xqVv2lTo40&ab_channel=TravelsCode)
    - Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
- Python:
    - [Link](https://www.youtube.com/watch?v=bCY4D9n3Pew&t=300s&ab_channel=ProgrammingKnowledge)
    - Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.
    - `Update python If necessary`:
        - `Step 1`: Go to Python’s official site.
        - `Step 2`: Click on the Downloads tab
        - `Step 3`: Download the version you need to upgrade to based on your system specifications(ie, 32-bit or 64-bit). Here we will be downloading the 64-bit installer for 3.X
        - `Step 4`: Click on the installer and it will begin the installation. Make sure to select the “Add Python 3.9 to PATH” option. and click on “Install Now”.
        - `Step 5`: Chech python version => python --version
- Ionic CLI:
    - [Link](https://ionicframework.com/docs/intro/cli)
    - Ionic empowers web developers to build leading cross-platform mobile apps and Progressive Web Apps (PWAs)
- AWS CLI:
    - [Link](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
    - The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services.
- Frameworks and Tools: NodeJS, NPM, Postbird & Postman
- Node Modules: `npm install -g node-modules`
- Update Pip: `python -m pip install --upgrade pip`
- virtualenv:
    - Command: `python -m pip install --user virtualenv`
    - [Installation Link](https://virtualenv.pypa.io/en/latest/installation.html)
- Install/Upgrade the EB CLI:
    - pip install --upgrade --user awsebcli
    - Installing from Github:
        - [Information Link](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html)
        - `Step 1`: git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git
        - `Step 2`: Bash or Zsh: python ./aws-elastic-beanstalk-cli-setup/scripts/ebcli_installer.py
            PowerShell or in a Command Prompt: python .\aws-elastic-beanstalk-cli-setup\scripts\ebcli_installer.py

### Perequisite 2 (AWS Setup)

- Account Setup:
    - [Link](https://portal.aws.amazon.com/billing/signup#)
    - Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis
- Creating a user:
    - [Link](https://aws.amazon.com/free/?trk=712ee378-d73b-4293-9bad-8ce09671ea7c&sc_channel=ps&s_kwcid=AL!4422!3!444219541886!p!!g!!aws%20account&ef_id=Cj0KCQjw08aYBhDlARIsAA_gb0f0v9icD8fw5bH10dU-jRFcB9_-SOHaAtkKh8Bwo4g1HQuaAQmSSQAaAjO2EALw_wcB:G:s&s_kwcid=AL!4422!3!444219541886!p!!g!!aws%20account&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)
    - Free Tier: This is for Gaining free, hands-on experience with the AWS platform, products, and services
- Permisions: AdministratorAccess-AWSElasticBeanstalk

### Perequisite 3 (AWS Configurations) 
- `Step 1`: aws configure (run on a terminal (eg.cmd))
- `Step 2`: Fill In The Details From The Created User
    - AWS Access Key ID [None]: XXXXXXXXXXXXX
    - AWS Secret Access Key [None]: XXXXXXXXXXXX
    - Default region name [None]: XXXXXXXXXXXXXXXXXX(eg. us-west-2)
    - Default output format [None]: XXXXXXXXX (eg. json)

---

### Perequisite 4 (Setup Node Environment):
- Step 1: npm i
    - `Optional`: npm audit fix.
- Step 2: npm run dev
- Step 3: npm run build
   - This Command should be properly set in the 'package.json' file in the same directory
   - If Zip Command Gives Problems: https://stackoverflow.com/a/55749636

---

## Deploying the System:
- Step 1: Open CMD as Addministrator and cd to the code files.
- Step 2: You can create a virtual enviromnment (Optional).
- Step 3: eb init (run on a terminal)
   - Do you wish to continue with CodeCommit? (Y/n): n
   - Do you want to set up SSH for your instances?(Y/n): y
   - Type a keypair name. (Default is aws-eb): Enter
   - Add this block of code in the config file under the .elasticbeanstalk folder.
        deploy:
            artifact: ./www/Archive.zip
- Step 4: eb create (run on a terminal)
   - Enter Environment Name (default is XXXXXXXXXXXXXXXXXX): Enter
   - Enter DNS CNAME prefix (default is XXXXXXXXXXXXXXXXXX): Enter (NB:= This has to be unique)
   - Select a load balancer type
        1) classic
        2) application
        3) network
        - (default is 2): 2
   - Would you like to enable Spot Fleet requests for this environment? (y/N): n
- Step 5: Done -> "INFO    Successfully launched environment:"
- Step 6: NB:= You can use 'eb deploy' to Push Changes

---

## Stand Out Task (Optional)
- ##### `Refactor the course RESTapi:`
    - If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

- ##### `Authentication:`
    - Prevent requests without valid authentication headers.
    - Make sure to add the token to the postman collection and export the postman collection file,
    - Add them to your submission so we can review!
- ##### `Custom Domain Name:`
    - Add your own domain name and have it point to the running services.
    (try adding a subdomain name to point to the processing server)
    - !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.

---

<p align=center>THE END, THANK YOU<p>

---
---
