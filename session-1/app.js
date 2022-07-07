function NotificationHandler() {
  if (!("Notification" in window)) {
    return alert("This browser does not support Notification");
  }

  if (Notification.permission === "granted") {
    new Notification("Hi , I am ilia.");
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Hi , Welcome!");
      }
    });
  }
}
