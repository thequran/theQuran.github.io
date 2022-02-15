const themes = [
    {
        'name': 'dark-blue',
        'bg': 'rgb(1, 39, 62)',
        'content': '#195f70',
        'text': 'rgb(255, 255, 255)',
        'text-2': 'rgb(122, 218, 235)'
        

     }, 
    {
        'name': 'dark-orange',
        'bg': 'rgb(82, 37, 16)',
        'content': 'rgb(192, 73, 29)',
        'text': 'rgb(255, 255, 255)',
        'text-2': 'rgb(241, 188, 127)'
    },
     {
        'name': 'dark-green',
        'bg': 'rgb(16, 65, 23)',
        'content': 'rgb(21, 158, 39)',
        'text': 'rgb(255, 255, 255)',
        'text-2': 'rgb(136, 241, 127)'

    }, {
        'name': 'light-green',
        'bg': 'rgb(193, 226, 198)',
        'content': 'rgb(76, 179, 90)',
        'text': 'rgb(0, 0, 0)',
        'text-2': 'rgb(15, 48, 12)'

    }
];


const defaultTheme = {
    'bg': 'rgb(1, 39, 62)',
    'content': '#195f70',
    'text': 'rgb(255, 255, 255)',
    'text-2': 'rgb(122, 218, 235)'

};//don't change this, otherwise app won't work;


let usersTheme;
let mainTheme;


if (usersTheme == null) {
    usersTheme = defaultTheme;
}
if (mainTheme == null) {
    mainTheme = usersTheme;
}
