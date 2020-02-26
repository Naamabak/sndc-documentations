import os

licence = '<!-- SPDX-License-Identifier: MPL-2.0 -->'


def add_licence_to_file(file_path: str) -> None:
    with open(file_path, 'r') as f:
        content = f.read()
    if licence in content:
        return
    print(f'Licence manquante {file_path}')


top_dirs = ['contribuer', 'fiches', 'files', 'glossaire', 'introduction', 'ressources',
            # os.path.join('tables', '.sources')
            ]

for top in top_dirs:
    for dir_path, dir_names, file_names in os.walk(top):
        for file in file_names:
            if file.endswith('.md'):
                file_path = os.path.join(dir_path, file)
                add_licence_to_file(file_path)
