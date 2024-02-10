//імпорт CSS-модуля
import css from "./FriendList.module.css";
import { FriendListItem } from "../friend_list_item/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendList}>
          {/* Кількість li залежить від кількості об'єктів в масиві */}          
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};
