_________________________________________________________________________________________
_________________ Udagram Image Filtering Microservice __________________________________
_________________________________________________________________________________________
Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]
_________________________________________________________________________________________
___________________________Details_______________________________________________________
_________________________________________________________________________________________

Names: Selepe Sello (South Africa)
Email: sbkskhalo.kq@gmail.com
_________________________________________________________________________________________
Starter Code: https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code
_________________________________________________________________________________________
**** Prerequisites(Installations) 1 ****
_________________________________________________________________________________________

Git: https://www.youtube.com/watch?v=4xqVv2lTo40&ab_channel=TravelsCode
Python: https://www.youtube.com/watch?v=bCY4D9n3Pew&t=300s&ab_channel=ProgrammingKnowledge
Update python If necessary:
    -Step 1: Go to Python’s official site.
    -Step 2: Click on the Downloads tab
    -Step 3: Download the version you need to upgrade to based on your system specifications(ie, 32-bit or 64-bit). Here we will be downloading the 64-bit installer for 3.X
    -Step 4: Click on the installer and it will begin the installation. Make sure to select the “Add Python 3.9 to PATH” option. and click on “Install Now”.
    -Step 5: Chech python version => python --version
Ionic CLI: https://ionicframework.com/docs/intro/cli
AWS CLI:  https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
Useful Tools: Postbird & Postman
Frameworks and Tools: Node and NPM
Node Modules: npm install -g node-modules
Update Pip: python -m pip install --upgrade pip
virtualenv: python -m pip install --user virtualenv
            (https://virtualenv.pypa.io/en/latest/installation.html)
Install/Upgrade the EB CLI:
    1.pip install --upgrade --user awsebcli
    2. Installing from Github: (https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3.html)
        Step 1: git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git
        Step 2: Bash or Zsh: python ./aws-elastic-beanstalk-cli-setup/scripts/ebcli_installer.py
                PowerShell or in a Command Prompt: python .\aws-elastic-beanstalk-cli-setup\scripts\ebcli_installer.py

_________________________________________________________________________________________
**** Prerequisites(Installations) 2 ****
_________________________________________________________________________________________
Account Setup: https://portal.aws.amazon.com/billing/signup#/
Creating a user: https://aws.amazon.com/free/?trk=712ee378-d73b-4293-9bad-8ce09671ea7c&sc_channel=ps&s_kwcid=AL!4422!3!444219541886!p!!g!!aws%20account&ef_id=Cj0KCQjw08aYBhDlARIsAA_gb0f0v9icD8fw5bH10dU-jRFcB9_-SOHaAtkKh8Bwo4g1HQuaAQmSSQAaAjO2EALw_wcB:G:s&s_kwcid=AL!4422!3!444219541886!p!!g!!aws%20account&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all
Permisions: AdministratorAccess-AWSElasticBeanstalk
Quick Setup: 
    Step 1: aws configure (run on a terminal (eg.cmd))
    Step 2: Fill In The Details From The Created User
        AWS Access Key ID [None]: XXXXXXXXXXXXX
        AWS Secret Access Key [None]: XXXXXXXXXXXX
        Default region name [None]: XXXXXXXXXXXXXXXXXX(eg. us-west-2)
        Default output format [None]: XXXXXXXXX (eg. json)
_________________________________________________________________________________________
_________________________________________________________________________________________
Setup Node Environmen:
    Step 1: npm i
    Step 1.1: npm audit fix (Optional).
    Step 2: npm run dev
Create a new endpoint in the server.ts file:
    The starter code has a task for you to complete an endpoint in `./src/server.ts`,
    which uses query parameter to download an image from a public URL, filter the image, and return the result.
    We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the     `./src/server.ts`  file.
    ```typescript
    import {filterImageFromURL, deleteLocalFiles} from './util/util';
    ```
Deploying your system:
    Step 1: Open CMD as Addministrator and cd to the code files.
    Step 2: You can create a virtual enviromnment (Optional).
    Step 3: eb init (run on a terminal)
       - Do you wish to continue with CodeCommit? (Y/n): n
       - Do you want to set up SSH for your instances?(Y/n): y
       - Type a keypair name. (Default is aws-eb): Enter
    Step 4: eb create (run on a terminal)
       - Enter Environment Name (default is XXXXXXXXXXXXXXXXXX): Enter
       - Enter DNS CNAME prefix (default is XXXXXXXXXXXXXXXXXX): Enter (NB:= This has to be unique)
       - Select a load balancer type
            1) classic
            2) application
            3) network
        (default is 2): 2
       - Would you like to enable Spot Fleet requests for this environment? (y/N): n
    Step 5: Done -> "INFO    Successfully launched environment:"
    Step 6: NB:= You can use 'eb deploy' to Push Changes
_________________________________________________________________________________________
_______________ Stand Out (Optional) ____________________________________________________
1. Refactor the course RESTapi:
    If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

2. Authentication:
    - Prevent requests without valid authentication headers.
    - Make sure to add the token to the postman collection and export the postman collection file,
    - Add them to your submission so we can review!
3. Custom Domain Name:
    - Add your own domain name and have it point to the running services.
    (try adding a subdomain name to point to the processing server)
    - !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.
_________________________________________________________________________________________
_______________________ THANK YOU, ALX-T Cloud Developer ________________________________
_________________________________________________________________________________________
