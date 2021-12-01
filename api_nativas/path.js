const path = require('path')

console.log(path.basename('c:\\temp\\arquivo.html')) // printa arquivo.html; traz so o nome do arquivo, mesmo que vc passe todo o caminho
console.log(path.normalize('c:\\temp/dir/subdir')) // printa c:\temp\dir\subdir; arruma os \ ou /
console.log(path.join('/teste', 'teste3/teste4', 'dir2')) // \teste\teste3\teste4\dir2
console.log(path.extname('path.php')) // .php, printa a extensao