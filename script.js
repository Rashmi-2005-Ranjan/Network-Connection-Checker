function checkNetworkStatus() {
  updateNetworkStatus();
}

function updateNetworkStatus() {
  const statusElement = document.getElementById("status");

  if (navigator.onLine) {
    statusElement.innerHTML =
      "You are Online <br> Network Type: " + getNetworkType();

    statusElement.className = "status online";
  } else {
    statusElement.innerHTML = `You are Offline`;

    statusElement.className = "status Offline";
  }
}

function getNetworkType() {
  if (navigator.connection) {
    const ConnectionType = navigator.connection.effectiveType || "Unknown";

    return ConnectionType;
  } else {
    return "Unknown";
  }
}

window.onload = updateNetworkStatus;
window.addEventListener("online", updateNetworkStatus());

window.addEventListener("offline", updateNetworkStatus());
