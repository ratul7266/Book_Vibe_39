import React from "react";
import { BookContext } from "../../../context/BookContext";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ListedReadList from "../../../components/listedBooks/ListedReadList";
import ListtedWishList from "../../../components/listedBooks/ListedWishList";
import ListedWishList from "../../../components/listedBooks/ListedWishList";

const Books = () => {
  return (
    <div className="mx-auto container">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList></ListedReadList>
        </TabPanel>
        <TabPanel>
          <ListedWishList></ListedWishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
