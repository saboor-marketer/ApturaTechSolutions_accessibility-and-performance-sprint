# Tic Tac Toe Game

A responsive and interactive Tic Tac Toe game built with HTML5, CSS3, and vanilla JavaScript, featuring a clean and modern UI with light/dark mode support. **Enhanced with full accessibility features and performance optimizations.**


## Features

- 🎮 Classic Tic Tac Toe gameplay
- ♿ **Fully accessible** - WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- 🌓 Light and dark mode with system preference detection
- 📱 Fully responsive design that works on all devices
- 🏆 Score tracking for both players and draws
- 🎨 Clean and modern user interface
- ⚡ Smooth animations and transitions
- 💾 Persistent theme preference using localStorage
- 🚀 **Performance optimized** with resource hints and CSS optimizations

## How to Play

1. Open `index.html` in any modern web browser
2. Players take turns clicking on the grid to place X or O (or use keyboard Tab + Enter/Space)
3. The first player to get 3 in a row (horizontally, vertically, or diagonally) wins
4. Click "New Game" to reset the board and start a new game
5. Toggle between light and dark mode using the moon/sun icon in the top-right corner

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space keys
- **Screen Reader Support**: ARIA labels and live regions for complete screen reader compatibility
- **Focus Management**: Visible focus states and proper focus trapping
- **Skip to Content**: Quick navigation link for keyboard users
- **Semantic HTML**: Proper landmarks and heading hierarchy
- **WCAG 2.1 AA**: Compliant with Web Content Accessibility Guidelines

### Keyboard Shortcuts
- `Tab` - Navigate between interactive elements
- `Enter/Space` - Activate buttons and game cells
- `Esc` - Close modal (when open)

## Performance Optimizations

- **Resource Hints**: Preconnect and preload directives for faster CDN loading
- **Deferred Scripts**: Non-blocking JavaScript execution
- **CSS Optimization**: Specific transitions, will-change hints, and content-visibility
- **Reduced Repaints**: Optimized animation properties for smoother rendering

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla)
- [Bootstrap 5](https://getbootstrap.com/) - For responsive layout and components
- [Font Awesome](https://fontawesome.com/) - For icons

## Browser Support

The game is tested and works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Installation

No installation required! Simply clone the repository or download the files and open `index.html` in your browser.

```bash
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
open index.html
```

## Customization

### Changing Colors

You can customize the colors by modifying the CSS variables in the `:root` selector in the `styles.css` file:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --dark-bg: #212529;
    --dark-card-bg: #2c3034;
    --dark-border: #444;
}
```

### Adding Animations

To add more animations, you can extend the CSS transitions in the `styles.css` file or add new keyframe animations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Documentation

For detailed information about accessibility and performance improvements, see [ACCESSIBILITY_PERFORMANCE_REPORT.md](./ACCESSIBILITY_PERFORMANCE_REPORT.md)

## Acknowledgements

- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by ABDUL SABOOR
