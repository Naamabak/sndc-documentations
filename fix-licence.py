import os

licence = '<!-- SPDX-License-Identifier: MPL-2.0 -->'
top_dirs = ['contribuer', 'fiches', 'files', 'glossaire', 'introduction', 'ressources',
            os.path.join('tables', '.sources')
            ]


def add_licence_to_all_files():
    for top in top_dirs:
        for dir_path, dir_names, file_names in os.walk(top):
            for file in file_names:
                if file.endswith('.md'):
                    file_path = os.path.join(dir_path, file)
                    add_licence_to_file(file_path)


def add_licence_to_file(file_path: str) -> None:
    with open(file_path, 'r') as f:
        content = f.read()
    if licence in content:
        return

    print(f'Ajout de la licence manquante dans le fichier {file_path}')
    lines = content.split('\n')
    i = get_yaml_insersion_line(lines)
    lines.insert(i + 1, licence)
    content = '\n'.join(lines)
    with open(file_path, 'w') as f:
        f.write(content)


def get_yaml_insersion_line(lines):
    for i, line in enumerate(lines):
        if line.startswith('# '):
            return i


if __name__ == '__main__':
    add_licence_to_all_files()
