import paramiko
import os
import json

def path_exists(sftp, path):
    try:
        sftp.stat(path)
        return True
    except FileNotFoundError:
        return False

def sftp_connect(host, port, username, password):
    try:
        # Create SSH client
        ssh_client = paramiko.SSHClient()
        ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

        # Connect to SSH server
        ssh_client.connect(hostname=host, port=port, username=username, password=password)

        # Create SFTP session
        sftp = ssh_client.open_sftp()
        print("Connected to SFTP server")

        # Change directory to the default path
        default_path = "/i-data/3df1ea78/video/Long Range Dataset/Raw"
        annotations_path = '/i-data/3df1ea78/video/Long Range Dataset/annotation'
        sftp.chdir(default_path)
        print("Changed directory to:", default_path)

        # List directory contents
        directory_contents = sftp.listdir('.')
        print("Directory contents:", directory_contents)

        # Initialize list to hold representative JSON objects
        representatives = []

        Soft_Bio_file_names = []


        # Iterate over directory contents
        for dir in directory_contents:
            # Initialize JSON object for representative
            folder_json = {
                "Representative": str(dir),
                "PID": []
            }
            
            # Get subfolders list for the current representative
            representative_path = os.path.join(default_path, dir)
            sub_folders_list = sftp.listdir(representative_path)
            
            # Add subfolders to the JSON object
            for sub_folder in sub_folders_list:
                subfolder_path = os.path.join(representative_path, sub_folder)
                pid_info = {
                    "PID": sub_folder,
                    "Consent": "NO",
                    "F_image": "NO",
                    "L_image": "NO",
                    "R_image": "NO",
                    "Video": "NO",
                    "S1P1": "NO",
                    "S1P2": "NO",
                    "S1P3": "NO",
                    "S1P4": "NO",
                    "S1P5": "NO",
                    "S1P6": "NO",
                    "S1P7": "NO",
                    "S1P8": "NO",
                    "S1P9": "NO",
                    "S1P10": "NO",
                    "S1P11": "NO",
                    "S1P12": "NO",
                    "S1P13": "NO",
                    "S1P14": "NO",
                    "S1P15": "NO",
                    "S1P16": "NO",
                    "S1P17": "NO",
                    "S1P18": "NO",
                    "S2P1": "NO",
                    "S2P2": "NO",
                    "S2P3": "NO",
                    "S2P4": "NO",
                    "S2P5": "NO",
                    "S2P6": "NO",
                    "S2P7": "NO",
                    "S2P8": "NO",
                    "S2P9": "NO",
                    "S2P10": "NO",
                    "S2P11": "NO",
                    "S2P12": "NO",
                    "S2P13": "NO",
                    "S2P14": "NO",
                    "S2P15": "NO",
                    "S2P16": "NO",
                    "S2P17": "NO",
                    "S2P18": "NO",
                }
                # Check for F, L, and R images and video
                #print(subfolder_path)
                #pid_files = sftp.listdir(str(subfolder_path).replace('Raw','annotation'))
                pid_files = sftp.listdir(subfolder_path)

              
                for file_name in pid_files:
                    if file_name.startswith("F") or 'F' in file_name and file_name.endswith((".jpg", "jpeg", "png")):
                        pid_info["F_image"] = "DATA"
                    elif file_name.startswith("L") or 'L' in file_name and file_name.endswith((".jpg", "jpeg", "png")):
                        pid_info["L_image"] = "DATA"
                    elif file_name.startswith("R") or 'R' in file_name and file_name.endswith((".jpg", "jpeg", "png")):
                        pid_info["R_image"] = "DATA"
                    elif file_name.endswith((".mp4", ".avi", ".mov", '.MOV')):
                        pid_info["Video"] = "DATA"
                    elif "consent" in file_name.lower():
                        pid_info["Consent"] = "DATA"

                  # Check if annotation path exists
                if path_exists(sftp, str(subfolder_path).replace('Raw','annotation')):

                    #print("Annotation path exist", str(subfolder_path).replace('Raw','annotation'))
                    #print(str(subfolder_path).replace('Raw','annotation'))
                    sub_sub_folder = sftp.listdir(str(subfolder_path).replace('Raw','annotation'))
                    #print(sub_sub_folder)
                    #print(sub_sub_folder)
                    for sub in sub_sub_folder:
                        sub_sub_sub_folder = sftp.listdir(os.path.join(str(subfolder_path).replace('Raw','annotation'),sub))


                        if 'enrollment' in sub.lower():

                            for file_name in sub_sub_sub_folder:
                                if file_name.startswith("F") or 'F' in file_name and file_name.endswith((".jpg", "jpeg", "png")):
                                    pid_info["F_image"] = "YES"
                                elif file_name.startswith("L") or 'L' in file_name and file_name.endswith((".jpg", "jpeg", "png")):
                                    pid_info["L_image"] = "YES"
                                elif file_name.startswith("R") or 'R' in file_name and file_name.endswith((".jpg", "jpeg", "png")):
                                    pid_info["R_image"] = "YES"
                                elif file_name.endswith((".mp4", ".avi", ".mov", '.MOV')) and 'Gait' in file_name:
                                    pid_info["Video"] = "YES"
                                elif "consent" in file_name.lower():
                                    pid_info["Consent"] = "YES"

                        elif 'probe' in sub.lower():
                            #0_04_04_2024_13_26_0_5.8_10_30_1_2_2_0_0_0_4_1_1_0_3_1_0_0_6_14
                            settings_counts = []
                            for file_name in sub_sub_sub_folder:
                                #print(file_name)
                                if file_name.endswith('.thumb'):
                                    pass
                                else:
                                        
                                    Soft_Bio_file_names.append(file_name)
                                    file_full_name = file_name.split('_')
                                    #['1', '04', '04', '2024', '11', '04', '0', '11.5', '20', '30', '0', '2', '2', '1', '0', '0', '1', '1', '0', '-1', '-1', '6', '0', '4', '6', '152.mp4']
                                    data_collection_date = file_full_name[1:4]
                                    data_collection_date = ''.join(data_collection_date)
                                    drone_settings = file_full_name[7:10]
                                    drone_settings = '_'.join(drone_settings)
                                    settings_counts.append(drone_settings)

                            
                            if settings_counts.count('5.8_10_30') ==1:
                                pid_info['S1P1'] = "YES"
                            
                            elif settings_counts.count('5.8_10_30') ==2:
                                pid_info['S1P1'] = "YES"
                                pid_info["S2P1"] = "YES"
                            
                            if settings_counts.count('11.5_20_30') ==1:
                                pid_info['S1P2'] = "YES"
                            
                            elif settings_counts.count("11.5_20_30") ==2:
                                pid_info['S1P2'] = "YES"
                                pid_info["S2P2"] = "YES"

                            if settings_counts.count('17.3_30_30') ==1:
                                pid_info['S1P3'] = "YES"
                            
                            elif settings_counts.count('17.3_30_30') ==2:
                                pid_info['S1P3'] = "YES"
                                pid_info['S2P3'] = "YES"

                            if settings_counts.count('23.1_40_30') ==1:
                                pid_info['S1P4'] = 'YES'

                            elif settings_counts.count('23.1_40_30') ==2:
                                pid_info['S1P4'] =='YES'
                                pid_info['S2P4']

                            if settings_counts.count('40_80_30') ==1:
                                pid_info['S1P5'] = 'YES'

                            elif settings_counts.count('40_80_30') ==2:
                                pid_info['S1P5'] =='YES'
                                pid_info['S2P5']

                            if settings_counts.count('60_120_30') ==1:
                                pid_info['S1P6'] = 'YES'

                            elif settings_counts.count('60_120_30') ==2:
                                pid_info['S1P6'] =='YES'
                                pid_info['S2P6']
                                

                            #60

                            if settings_counts.count('15_10_60') ==1:
                                pid_info['S1P7'] = 'YES'

                            elif settings_counts.count('15_10_60') ==2:
                                pid_info['S1P7'] =='YES'
                                pid_info['S2P7']
                                
                            
                            if settings_counts.count('30_20_60') ==1:
                                pid_info['S1P8'] = 'YES'

                            elif settings_counts.count('30_20_60') ==2:
                                pid_info['S1P8'] =='YES'
                                pid_info['S2P8']
                                
                    
                            if settings_counts.count('45_30_60') ==1:
                                pid_info['S1P9'] = 'YES'

                            elif settings_counts.count('45_30_60') ==2:
                                pid_info['S1P9'] =='YES'
                                pid_info['S2P9']


                            if settings_counts.count('60_40_60') ==1:
                                pid_info['S1P10'] = 'YES'

                            elif settings_counts.count('60_30_60') ==2:
                                pid_info['S1P10'] =='YES'
                                pid_info['S2P10']

                            if settings_counts.count('75_80_60') ==1:
                                pid_info['S1P11'] = 'YES'

                            elif settings_counts.count('75_80_60') ==2:
                                pid_info['S1P11'] =='YES'
                                pid_info['S2P11']
                            
                            if settings_counts.count('90_120_60') ==1:
                                pid_info['S1P12'] = 'YES'

                            elif settings_counts.count('90_120_60') ==2:
                                pid_info['S1P12'] =='YES'
                                pid_info['S2P12']

                            #90

                            if settings_counts.count('10_00_90') ==1:
                                pid_info['S1P13'] = 'YES'

                            elif settings_counts.count('10_00_90') ==2:
                                pid_info['S1P13'] =='YES'
                                pid_info['S2P13']
                            
                            if settings_counts.count('20_00_90') ==1:
                                pid_info['S1P14'] = 'YES'

                            elif settings_counts.count('20_00_90') ==2:
                                pid_info['S1P14'] =='YES'
                                pid_info['S2P14']
                            
                            if settings_counts.count('30_00_90') ==1:
                                pid_info['S1P15'] = 'YES'

                            elif settings_counts.count('30_00_90') ==2:
                                pid_info['S1P15'] =='YES'
                                pid_info['S2P15']

                            if settings_counts.count('40_00_90') ==1:
                                pid_info['S1P16'] = 'YES'

                            elif settings_counts.count('40_00_90') ==2:
                                pid_info['S1P16'] =='YES'
                                pid_info['S2P16']

                            if settings_counts.count('80_00_90') ==1:
                                pid_info['S1P17'] = 'YES'

                            elif settings_counts.count('80_00_90') ==2:
                                pid_info['S1P17'] =='YES'
                                pid_info['S2P17']

                            if settings_counts.count('120_00_90') ==1:
                                pid_info['S1P18'] = 'YES'

                            elif settings_counts.count('20_00_90') ==2:
                                pid_info['S1P18'] =='YES'
                                pid_info['S2P18']
                else:
                    pass




                folder_json["PID"].append(pid_info)
        
            # Append representative JSON object to the list
            representatives.append(folder_json)

        # Save list of file names to a text file
        with open('Soft_Bio_file_names.txt', 'w') as file:
            for name in Soft_Bio_file_names:
                file.write("%s\n" % name)
        
        # Save list of representatives to file
        with open('/home/socialab/Documents/long-range_recog.github.io/data.json', 'w') as json_file:
            json.dump(representatives, json_file, indent=4)

        print("JSON file saved successfully.")

        # Close SFTP session
        sftp.close()
        print("SFTP session closed")

        # Close SSH connection
        ssh_client.close()
        print("SSH connection closed")

    except paramiko.AuthenticationException:
        print("Authentication failed, please check your credentials")
    except paramiko.SSHException as ssh_exception:
        print("Unable to establish SSH connection:", ssh_exception)
    except Exception as e:
        print("An error occurred:", e)

# SSH server credentials
host = "10.0.4.137"
port = 22
username = "admin"
password = "socialab_admin"

# Call the function to connect via SFTP
sftp_connect(host, port, username, password)
