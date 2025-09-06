
# Chrome Form Filler Assistant "Autofill-web-chrome"🚀

A powerful and customizable Google Chrome extension designed to save you time by automatically filling out web forms with your predefined data. Perfect for developers, testers, and anyone who frequently fills out the same information online.

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-yellowgreen)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/27f61514-5ee9-4612-a551-4ed790d8af2a" />

## ✨ Features

*   **One-Click Fill:** Populate all targeted form fields on a webpage instantly.
*   **Highly Customizable:** Easily configure the extension to work with any website by mapping field identifiers to your data.
*   **Multiple Field Targeting:** Supports finding form fields by their `name`, `id`, or `class` attributes.
*   **User-Friendly Trigger:** Fill forms either by clicking the extension's popup button or using a custom keyboard shortcut (`Ctrl+Shift+F` by default).
*   **Modern Chrome API:** Built using Manifest V3, ensuring compliance with the latest Chrome extension standards for security and performance.

## 🛠️ Browser Requirements

This extension requires **Google Chrome** or any Chromium-based browser (e.g., **Microsoft Edge**, **Brave**) that supports **Manifest V3**.
*   Minimum recommended browser version: **Chrome 88+**

## 📦 Installation (From Source)

To install and use this extension:

1.  **Clone or Download this Repository**
    ```bash
    git clone https://github.com/D3One/Autofill-web-chrome.git
    ```

2.  **Open Chrome Extensions Page**
    Navigate to `chrome://extensions/` in your web browser (chrome only).

3.  **Enable Developer Mode**
    Toggle the switch labeled **"Developer mode"** in the top right corner.

4.  **Load the Extension**
    Click the **"Load unpacked"** button and select the directory where you cloned/downloaded this repository.

5.  **Pin the Extension (Optional)**
    Click the puzzle piece icon in Chrome's toolbar and pin the **"Form Filler Assistant"** for easy access.

## 🚀 How to Use

1.  **Navigate** to a website with a form you want to fill.
2.  **Click** on the extension's icon in your toolbar.
3.  **Click the "Fill Form!" button** in the popup window.
4.  **Alternatively**, use the keyboard shortcut **`Ctrl+Shift+F`** while on the page.

The form fields specified in the `fieldPresets` object will be automatically populated.

## ⚙️ Configuration & Customization

The core functionality is configured in the `content.js` file. To make the extension work for your specific needs, you must edit the `fieldPresets` object.

### Steps to Find Field Identifiers:

1.  Go to the website with the form.
2.  **Right-click** on the form field you want to automate and select **"Inspect"**.
3.  In the Developer Tools pane, look for the `name`, `id`, or `class` attribute of the HTML element.
    *   Example: `<input type="text" name="username" id="user-field" class="input-primary">`
4.  Add a new key-value pair to the `fieldPresets` object in `content.js` using the identifier you found.

### Example Configuration:

```javascript
// In content.js
const fieldPresets = {
    // Uses the 'name' attribute
    "username": "JohnDoe123",
    // Uses the 'id' attribute
    "user-field": "johndoe@example.com",
    // Uses a 'class' attribute (will target the first element with this class)
    "input-primary": "+1234567890",
    "address": "123 Main St",
};
```

**⚠️ Important Security Notice:** This extension is designed for convenience. **DO NOT** store sensitive information like passwords, credit card numbers, or government IDs directly in the source code.

## 📁 Project Structure

```
chrome-form-filler/
├── icons/               # Extension icons (various sizes)
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json        # Core extension configuration
├── content.js          # Script that runs on web pages to fill forms
├── popup.html          # The UI for the extension's popup
└── popup.js            # Logic for the popup UI
└── README.md           # This file
```

## 👨‍💻 Author

**Name**  Ivan Piskunov
*   GitHub: [@D3One](https://github.com/D3One)
*   Idea refined and code co-created with the assistance of R1, a large language model.

## ⚠️ Disclaimer

This software is provided "as is", without warranty of any kind. The author is not responsible for any misuse of this extension, including but not limited to the automated submission of forms without permission or the handling of personal data. It is the user's responsibility to ensure they have the right to automate interactions with any website they use this extension on. Always comply with a website's Terms of Service.

## 📜 License

This project is licensed under the **MIT License**. Feel free to modify and distribute it. See the `LICENSE` file for more details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YOUR_USERNAME/chrome-form-filler/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 🙏 Acknowledgments

*   Thanks to the Chrome Extensions documentation.
*   Special thanks to R1 for invaluable architectural and coding assistance.

---
