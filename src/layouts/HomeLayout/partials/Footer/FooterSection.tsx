import React from "react";

export interface IFooterList {
  icon?: React.ReactElement;
  children?: React.ReactElement | string;
  link?: string;
}

function FooterSection({
  listItem,
  title,
}: {
  listItem: Array<IFooterList>;
  title: string;
}) {
  return (
    <>
      {title && <h3 className="item__title">{title}</h3>}
      <ul className="contact__list footer__list">
        {listItem &&
          listItem.length > 0 &&
          listItem.map((item, index) => {
            return (
              <li className="contact__list-item" key={index}>
                <a
                  className="link__icon"
                  href={item.link ? item.link : "#"}
                  target="_blank"
                >
                  <span className="icon">{item.icon}</span>
                  <span className="text">{item.children}</span>
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default FooterSection;
