# HipNature

GP09

Group Leader:
Leah Roselyn James
A0206441R
leah.james@u.nus.edu
+65 83606585

Group Member 1:
Co Ziying Kelly
A0205648B
kelly.co@u.nus.edu
+65 90618021

Group Member 2:
Lam Zi Wen
A0184283Y
Lamziwen@u.nus.edu
+65 92952794

Group Member 3:
Lim Tong Lee
A0184283Y
e0053433@u.nus.edu
+65 91170749

Youtube Video Link: https://youtu.be/k_QPhOwZTDU

Detailed instructions for deploying and running the prototype:
Step 1: Make sure you have Netbeans with GlassFish, Node, Angular, Ionic is properly installed and configured

Step 2: Open ./source/HipNature in Netbeans

Step 3: Create MySQL database named hipnature and create JDBC resource and persistence unit

Step 4: Deploy HipNature onto GlassFish

Step 5: Open http://localhost:8080/HipNature-war/ to access the JSF front-end
Company Account (Username: partner1 password: password)
                (Username: partner2 password: password)
Step 6: Open ./source/HipNatureIonic

Step 7: run "npm install" in your terminal

Step 8: run "ionic serve" in your terminal

Step 9: Open http://localhost:8100/ to access Ionic front-end on the browser

Student Accounts:
Username: marktan123 Password: password123
Username: rachellee Password: password123
Username: edithchan Password: password123


To run the Ionic application on Android, follow the steps below
Step 10: run "npm install -g native-run" in your terminal

Step 11: run "ionic cordova prepare android" in your terminal,
enter "Y" when prompted to intergrate the app with Cordova,
enter "Y" when prompted to install platform android

Step 12: Connect the Android device to the computer and enable USB debugging

Step 13: run "ionic cordova run android -l" in your terminal

Step 15: Open HipNatureIonic on your Android device

Step 16: To create APK file for Android devices, go to .\source\HipNatureIonic\ and run "ionic cordova build --release android" in the terminal,
the output file "" will be in .\source\HipNatureIonic\platforms\android\app\build\outputs\apk\release
