import time
from plyer import notification
if __name__ =="__main__":
    while(True):
        notification.notify(
            title = " **Important remainder raj** ",
            message = "complete your computer assignment, your deadline is nearby.",
            timeout =8
        )
        time.sleep(60)
