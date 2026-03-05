# Heir of Gaia - Official Website

Professional static website for the Hytale server "Heir of Gaia".

## 🎨 Features

- **Dark medieval fantasy theme** with custom color palette
- **Fully responsive** - works on all devices
- **Smooth animations** and subtle visual effects
- **Intuitive navigation** with mobile menu
- **Complete pages**:
  - Homepage with server information
  - Available commands
  - Comprehensive rank system (Default, Donator, Prestige, Staff)
  - Server rules
  - Store with subscription tiers
  - Contact and Discord

## 📁 Project Structure

```
website/
├── index.html          # Homepage
├── commands.html       # Command list
├── ranks.html          # Rank system
├── rules.html          # Server rules
├── store.html          # Store
├── contact.html        # Contact and Discord
├── css/
│   └── style.css       # CSS styles
├── js/
│   └── script.js       # JavaScript
└── README.md           # This file
```

## 🚀 Installation

1. **Download all files** to a folder on your computer

2. **Customize information**:
   - Open `index.html` and modify the server IP (line with `id="serverIP"`)
   - All other links (Discord, Store, Email) are already configured:
     - Store: https://heirofgaia.tip4serv.com/
     - Discord: https://discord.gg/JfHbU9vkr3
     - Email: heirgaia@gmail.com

3. **Hosting**:
   - Upload all files to your web host
   - Or use free services like:
     - GitHub Pages
     - Netlify
     - Vercel
     - Cloudflare Pages

## 🎨 Color Palette

The site uses a medieval-inspired palette with rank-specific colors from your EssentialsPlus config:

- **Primary**: `#8b4513` (Saddle Brown)
- **Secondary**: `#d4af37` (Gold)
- **Accent**: `#c9a961` (Pale Gold)
- **Dark Background**: `#0a0a0a`
- **Cards**: `#1a1a1a`

### Rank Colors (from EssentialsPlus):
- Peasant: `#634f4f`
- Villager: `#865252`
- Squire: `#905932`
- Steward: `#fdbe01`
- Envoy: `#ffe19b`
- Noble: `#3f9c88`
- Warden: `#04a585`
- Sovereign: `#114b3c`
- Highborn: `#2e58a1`
- Heir: `#568edd`
- Divine Herald: `#fff6ea`
- Royalty: `#884db4`
- Legendary: `#c12bdd`
- Demigod: `#d42fa6`
- Staff/Artist: `#ff33cc`
- Admin: `#FF5555`

## ⚙️ Customization

### Modify colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #8b4513;
    --secondary-color: #d4af37;
    --accent-color: #c9a961;
    /* ... other colors */
}
```

### Add commands

Edit `commands.html` and add command cards:

```html
<div class="command-card">
    <div class="command-header">
        <code>/your-command</code>
    </div>
    <p>Command description</p>
</div>
```

### Modify ranks

Edit `ranks.html` to add or modify ranks and their benefits.

### Change rules

Edit `rules.html` to customize your server rules.

## 📱 Responsive Design

The site automatically adapts to:
- **Desktop**: Horizontal navigation, multi-column grids
- **Tablet**: Adaptive grids
- **Mobile**: Hamburger menu, single columns

## 🌐 Browser Compatibility

- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Opera (latest versions)

## 📝 Important Notes

1. **Server IP**: Modify the IP in `index.html` (line 31)
2. **Discord Link**: Already configured to https://discord.gg/JfHbU9vkr3
3. **Store URL**: Already configured to https://heirofgaia.tip4serv.com/
4. **Email**: Already configured to heirgaia@gmail.com
5. **Images**: You can add an `images/` folder for logos or banners

## 🎮 Server Information

- **Name**: Heir of Gaia
- **Creator**: John Mack
- **Max Players**: 100
- **Game Mode**: Adventure
- **Ranks**: 19 unique ranks across 4 categories

## 🔧 Support

For questions or issues:
- Contact the team on Discord
- Verify all files are uploaded correctly
- Ensure folder structure is maintained

## 📄 License

Website created for Heir of Gaia - 2026
Created by John Mack

---

**Welcome to Heir of Gaia! ⚔️**
