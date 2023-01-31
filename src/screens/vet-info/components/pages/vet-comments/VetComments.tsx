import { View, Text } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import createStyles from "./VetComments.style";
import { useTheme } from "@react-navigation/native";
import axios from 'axios';
import { comment } from '@services/comment-service/CommentService';
import Search from '@shared-components/search/Search';

interface VetCommentsProps {
}
const VetComments: React.FC<VetCommentsProps> = () => {

 const theme = useTheme();
 const { colors } = theme;
 const styles = useMemo(() => createStyles(theme), [theme]);

 const getComment = async () => {
      
  await axios.get('http://10.0.2.2:5000/comment', {
   })
  .then(function (response) {
      console.log(response.data);
      setComments(response.data);
      return response.data;
  })
  .catch(function (error) {
      console.log(error);
  })
}

useEffect(() => {
getComment();
}, []);

const [comments, setComments] = useState<comment[]>([])

return (

    
    <View style={{top: 48}}>
      <Search placeholder='Görüşlerde Ara...'
      style={styles.search}
      iconStyle= {styles.icon}
      barStyle={styles.bar}/>
      <>
      {
          comments.map(comment => (
            <View key= {comment.comment_id} style={styles.container}>
                <Text>{comment.comment_id}</Text>
                <Text>{comment.comment_desc}</Text>
            </View>
        ))
      }
     </>
    </View>
);
  };
  
  export default VetComments;
  