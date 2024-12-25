# **Network Connection Checker**

A lightweight web application built with **JavaScript**, **HTML**, and **CSS** that detects the network status and type of network on a device. This tool provides real-time feedback on whether the device is online or offline and displays additional details about the type of internet connection.

---

## **Features**

- **Network Status Detection**: Instantly check if the device is online or offline.
- **Network Type Information**: Displays the type of network (e.g., Wi-Fi, Cellular, Ethernet, etc.).
- **Real-time Updates**: The status and type of connection automatically update when the network state changes.
- **Responsive Design**: Optimized for all screen sizes and devices.

---

## **Technologies Used**

- **HTML**: Structure of the application.
- **CSS**: Styling for an attractive and responsive design.
- **JavaScript**: Logic for detecting network status and type.

---

## **How It Works**

1. **Network Status**: 
   - The app uses the `navigator.onLine` property to determine whether the device is online or offline.
   - Displays a message indicating the current network state.

2. **Network Type**:
   - Utilizes the `navigator.connection` API (or similar supported APIs) to identify the connection type.
   - Displays details such as `Wi-Fi`, `Cellular`, or other network types.

---

## **Installation and Usage**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Network-Connection-Checker.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Network-Connection-Checker
   ```

3. **Open the Application**:
   - Open the `index.html` file in any modern web browser.
   - The application will load and display the network status and type.

---

## **Demo**

Check out a live demo: [Network Connection Checker Live](#)  
*(Replace `#` with the link to your deployed application, if available.)*

---

## **Screenshots**

### **Online Status**
![Online Status](#)  
*(Replace `#` with a link to an image of your application showing the online state.)*

### **Offline Status**
![Offline Status](#)  
*(Replace `#` with a link to an image of your application showing the offline state.)*

---

## **Contributing**

Contributions are welcome! If you'd like to improve this application, follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- Thanks to the **MDN Web Docs** for providing comprehensive documentation on the `navigator` API.
- Inspired by the need for simple and effective network status checkers.
