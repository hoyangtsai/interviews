import "./notification.css";
import classNames from "classnames";
import { useContext, useCallback } from "react";
import { Drawer, Tabs, TabPanel, SearchBox } from "tea-component";

import { LayoutContext } from "./Layout";

const Notification = () => {
  const { state, dispatch } = useContext(LayoutContext);
  const tabs = [
    { id: "to-do", label: "To-do" },
    { id: "message", label: "Message" }
  ];

  const todoList = [
    {
      title: "消息标题",
      content:
        "消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情",
      time: "3 分钟前",
      isRead: false
    },
    {
      title: "消息标题",
      content:
        "消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情",
      time: "10 分钟前",
      isRead: true
    },
    {
      title: "消息标题",
      content:
        "消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情",
      time: "2 小时前",
      isRead: false
    },
    {
      title: "消息标题",
      content:
        "消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情",
      time: "5 小时前",
      isRead: true
    },
    {
      title: "消息标题",
      content:
        "消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情",
      time: "1 天前",
      isRead: true
    },
    {
      title: "消息标题",
      content:
        "消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情消息详情",
      time: "2 天前",
      isRead: true
    }
  ];

  // const handleClose = useCallback(() => setVisible(false), [setVisible]);
  const handleClose = () => dispatch({ type: "close", origin: "notification" });

  return (
    <Drawer visible={state.visible} onClose={handleClose}>
      <div className="notification__container">
        <Tabs tabs={tabs} animated={false}>
          <TabPanel id="to-do">
            <SearchBox placeholder="Search" />
            <ul className="notification-list">
              {todoList.map((item, index) => (
                <li
                  key={index}
                  className={classNames(
                    "notification-list__item",
                    item.isRead ? "" : "is-unread"
                  )}
                >
                  <div className="notification-list__container">
                    <div className="notification-list__content">
                      <i className="notification-list__dot"></i>
                      <div className="notification-list__title">
                        {item.title}
                      </div>
                      <div className="notification-list__details">
                        {item.content}
                      </div>
                    </div>
                    <div className="notification-list__extra">
                      <div className="notification-list__time">{item.time}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel id="message"></TabPanel>
        </Tabs>
      </div>
    </Drawer>
  );
};

export default Notification;
