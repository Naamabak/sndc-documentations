#!/bin/sh
IFS=':'
echo ___INFO: création des preview pour les références externes aux tables___ 
grep -ERio --exclude-dir={node_modules,.vuepress,files,contribuer} --include \*.md '\[[^\/]*\]\(\.\.\/tables\/[^\/]*\/[^\/]*\.md\)' . | wc -l
grep -ERio --exclude-dir={node_modules,.vuepress,files,contribuer} --include \*.md '\[[^\/]*\]\(\.\.\/tables\/[^\/]*\/[^\/]*\.md\)' . | while read -r line ; do
    if [[ $line == *":"* ]]; then
        read -a parts <<< "$line"
        seq=${parts[1]}
        file=${parts[0]}
    else
        seq=$line
    fi
    output=$(echo "$seq" | sed -e 's:\[:<PreviewPage text=":g' -e 's:\](:" link=":g' -e 's:\.md):\/" \/>:g' -e 's:\*\*::g' -e 's:README\/::g' -e 's:DCIR\/::g' -e 's:REFERENTIELS\/::g' -e 's:PMSI MCO\/::g' -e 's:PMSI%20MCO\/::g' -e 's:PMSI HAD\/::g' -e 's:PMSI SSR\/::g' -e 's:PMSI RIP\/::g' -e 's:Causes de décès\/::g' -e 's:Causes%20de%20décès::g' -e 's:CARTOGRAPHIE_PATHOLOGIES\/::g' ) 
    escaped_output=$(printf '%s\n' "$output" | sed -e 's/[]\/$*.^[]/\\&/g')
    escaped_input=$(printf '%s\n' "$seq" | sed -e 's/[]\/$*.^[]/\\&/g')
    #sed -i -e "s|$escaped_input|$escaped_output|g" "$file"
    sed -i -e "0,/$escaped_input/ s/$escaped_input/$escaped_output/" "$file"
done
echo ___INFO: création des preview pour les références internes aux tables___
grep -ERio --exclude-dir={node_modules,.vuepress,files} --include \*.md '\[[^\/]*\]\(\/tables\/[^\/]*)' ./tables/ | wc -l
grep -ERio --exclude-dir={node_modules,.vuepress,files} --include \*.md '\[[^\/]*\]\(\/tables\/[^\/]*)' ./tables/ | while read -r line ; do
    read -a parts <<< "$line"
    seq=${parts[1]}
    file=${parts[0]}
    output=$(echo "$seq" | sed -e 's:\[:<PreviewPage text=":g' -e 's:\](:" link=":g' -e 's:):" \/>:g' -e 's:DCIR\/::g' -e 's:REFERENTIELS\/::g' -e 's:PMSI MCO\/::g' -e 's:PMSI%20MCO\/::g' -e 's:PMSI HAD\/::g' -e 's:PMSI SSR\/::g' -e 's:PMSI RIP\/::g' -e 's:Causes de décès\/::g' -e 's:Causes%20de%20décès::g' -e 's:CARTOGRAPHIE_PATHOLOGIES\/::g'  ) 
    escaped_output=$(printf '%s\n' "$output" | sed -e 's/[]\/$*.^[]/\\&/g')
    escaped_input=$(printf '%s\n' "$seq" | sed -e 's/[]\/$*.^[]/\\&/g')
    #sed -i -e "s|$escaped_input|$escaped_output|g" "$file"
    sed -i -e "0,/$escaped_input/ s/$escaped_input/$escaped_output/" "$file"
done