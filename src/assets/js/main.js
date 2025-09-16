const darkModeToggle = document.getElementById('darkModeToggle');
const theme = localStorage.getItem('theme') || 'light';

// Define color schemes for both themes
const colorSchemes = {
    light: {
        tile1: '#FF6B6B',
        tile2: '#4ECDC4',
        tile3: '#45B7D1',
        tile4: '#96CEB4'
    },
    dark: {
        tile1: '#2C3E50',
        tile2: '#2980B9',
        tile3: '#8E44AD',
        tile4: '#27AE60'
    }
};

// Function to update tile colors
function updateTileColors(theme) {
    const tiles = document.querySelectorAll('.tile');
    const colors = colorSchemes[theme];
    
    tiles.forEach((tile, index) => {
        switch(index) {
            case 0:
                tile.style.backgroundColor = colors.tile1;
                break;
            case 1:
                tile.style.backgroundColor = colors.tile2;
                break;
            case 2:
                tile.style.backgroundColor = colors.tile3;
                break;
            case 3:
                tile.style.backgroundColor = colors.tile4;
                break;
        }
    });
}

// Set initial theme
document.documentElement.setAttribute('data-theme', theme);
updateTileColors(theme);

darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateTileColors(newTheme);
});

// Set initial button state
if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateTileColors('dark');
}