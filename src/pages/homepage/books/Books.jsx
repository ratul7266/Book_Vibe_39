import React from "react";
import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks);
  return (
    <div className="mx-auto container">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>read list: {storedBooks.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>wish list: {wishList.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
