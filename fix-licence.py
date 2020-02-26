import os

licence = '<!-- SPDX-License-Identifier: MPL-2.0 -->'


def add_licence_to_file(file_path: str) -> None:
    with open(file_path, 'r') as f:
        content = f.read()
    if licence in content:
        return

    if content.startswith('# '):
        add_licence_to_simple_file(content, file_path)
    else:
        print(f'fichier à traiter à la main {file_path}')


def add_licence_to_simple_file(content, file_path):
    print(f'Ajout de la licence manquante dans le fichier {file_path}')
    lines = content.split('\n')
    lines.insert(1, licence)
    content = '\n'.join(lines)
    with open(file_path, 'w') as f:
        f.write(content)


top_dirs = ['contribuer', 'fiches', 'files', 'glossaire', 'introduction', 'ressources',
            os.path.join('tables', '.sources')
            ]

for top in top_dirs:
    for dir_path, dir_names, file_names in os.walk(top):
        for file in file_names:
            if file.endswith('.md'):
                file_path = os.path.join(dir_path, file)
                add_licence_to_file(file_path)
