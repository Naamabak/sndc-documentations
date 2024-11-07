import os
import re

def update_paths(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace specified paths in the entire content
    content = content.replace("../tables/DCIR_DCIRS/", "../tables/REFERENTIELS/")
    content = content.replace("../tables/BENEFICIAIRE/", "../tables/REFERENTIELS/")
    content = content.replace("../tables/PMSI/PMSI MCO/", "../tables/PMSI MCO/")
    content = content.replace("../tables/PMSI/PMSI HAD/", "../tables/PMSI HAD/")
    content = content.replace("../tables/PMSI/PMSI SSR/", "../tables/PMSI SSR/")
    content = content.replace("../tables/PMSI/PMSI RIM-P/", "../tables/PMSI RIP/")
    content = content.replace("../../../fiches/", "../../fiches/")
    content = content.replace("../../../glossaire/", "../../glossaire/")
    content = content.replace("../../../tags/", "../../tags/")
    
    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Updated paths in file: {file_path}")

def remove_dcirs_damir_links(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.readlines()
    
    # Process each line to remove only the Markdown links containing "/DCIRS/" or "/DAMIR/"
    updated_content = [
        re.sub(r'\[([^\]]+)\]\(.*?/(DCIRS|DAMIR)/.*?\)', r"'\1'", line)
        for line in content
    ]
    
    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(updated_content)
    
    print(f"Removed DCIRS/DAMIR links from file: {file_path}")

def process_md_files(directory):
    # Recursively traverse the directory to find all .md files, including subfolders
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                update_paths(file_path)
                remove_dcirs_damir_links(file_path)

# Use the current working directory
directory = os.getcwd()
process_md_files(directory)
