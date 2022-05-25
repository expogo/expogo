import * as React from 'react';
import { FlatList } from "react-native";
import { addMultipleGifs, deleteAllGifs } from "../services/GifManagement";
import GifItem from "./GifItem";

function AllGifsList() {
  React.useEffect(() => {
    (async () => {
      await addMultipleGifs(ids);
    })();

    return () => {
      deleteAllGifs();
    };
  }, []);

  const renderItem = (item) => {
    return <GifItem gifId={item.item.gifId} gifName={item.item.gifName} color={item.item.color} />;
  };

  const keyExtractor = (item, index) => {
    item.gifId.toString();
  };
  return (
    <FlatList
      style={{}}
      data={GIFListData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      
    />
  );
}

const GIFListData = [
  { id: 0, gifId: "ICOgUNjpvO0PC", gifName: "Первая кошка", color:'#dbd2ce' },
  { id: 1, gifId: "MDJ9IbxxvDUQM", gifName: "Вторая кошка", color:'#d1c1ba' },
  { id: 2, gifId: "5i7umUqAOYYEw", gifName: "Третья кошка", color:'#ede8e6' },
  { id: 3, gifId: "q1MeAPDDMb43K", gifName: "Четвертая кошка", color:'#9e928d'  },
  { id: 4, gifId: "GeimqsH0TLDt4tScGw", gifName: "Пятая кошка", color:'#f7ede9' },
  { id: 5, gifId: "3nbxypT20Ulmo", gifName: "Шестая кошка", color:'#967162' },
  { id: 6, gifId: "GwGXoeb0gm7sc", gifName: "Седьмая кошка", color:'#ad7863' },
];

const ids = GIFListData.map((item) => item.gifId);

export default AllGifsList;