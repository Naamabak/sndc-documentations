import os


def get_files(folder: str, ext: str, ignore: str) -> list:
    """Get absolute path of all files endind with a given extension
    found in folder. Ignores file given as ignore.

    :param folder: folder to parse for files.
    :param ext: extension of files to retrieve.
    :param ignore: name of files to ignore.
    :return: list of absolute paths to files.
    """

    files = []

    for dirpath, dirname, filenames in os.walk(folder):
        full_paths = [
            os.path.join(dirpath, filename) for filename in filenames
            if filename.endswith(ext)
               and ignore not in filename
        ]
        files.extend(full_paths)

    return files


def clean_up_files(files: list) -> dict:
    """Open all the files found at paths listed in files.

    Read them line by line and store it in a list.

    Returns dict of file lists keyed by file path.

    :param files: files to convert to lists.
    :return: dict containing the file's path as key and a list containing
        each line as value.
    """

    clean_files = {}

    for file_path in files:
        with open(file_path) as file:
            lines_list = [line for line in file.readlines()
                          ]
        clean_files[file_path] = lines_list

    return clean_files


def check_licence_index(licence: str, file: list) -> int or False:
    """Get licence index, or False if licence not in file.

    :param licence: line to check if it is written in a file.
    :param file: file to check for licence.
    :return: Index of the licence if the licence is in file; else False.
    """

    index = file.index(licence) if licence in file else False

    return index


def fix_licence(licence: str, position: int, files: dict) -> dict:
    """Check if the licence is in the file. If not, insert licence at the
    right index.

    Moves the license at the right index if it is present at the wrong index.

    :param licence: line to check if it is written in a file and if it is
        indexed at the right position.
    :param position: index at which licence should be written.
    :param files: files to check for the licence.
    :return: modified files with fixed licence.
    """

    for file_path, file_lines in files.items():
        print(file_path)
        if licence in file_lines:
            file_lines.index(licence)
        else:
            file_lines.insert(position - 1, licence + '\n')

    return files


def write_files(files: dict):
    """Save modified files under same path as originals.

    :param files: modified files with fixed licence.
    """

    for file_path, file_contents in files.items():
        f = open(file_path, 'w')
        for line in file_contents:
            f.write(line)
        f.close()


def main(
        licence: str = '<!-- SPDX-License-Identifier: MPL-2.0 -->\n',
        ignore: str = 'meetup',
        folder: str = '..',
        ext: str = '.md',
        position: int = 2,
):
    file_paths = get_files(folder, ext, ignore)
    clean_files = clean_up_files(file_paths)
    fixed_files = fix_licence(licence, position, clean_files)
    write_files(fixed_files)


if __name__ == '__main__':
    main()
