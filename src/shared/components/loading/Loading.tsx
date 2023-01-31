import React, { useMemo } from "react";
import { ActivityIndicator, View } from "react-native";
import createStyles from "./Loading.style";
import { useTheme } from "@react-navigation/native";
import { LoadingState } from "@services/redux/loading/LoadingState";
import { connect } from "react-redux";



interface LoadingProps {
    loadingState: LoadingState;
}
const Loading = (props: LoadingProps) => {
    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
  
    return (
        props.loadingState.show ? 
        <View style = {styles.backdrop}>
        <ActivityIndicator animating = {true} color = {colors.white}/>
        </View>
        : null
    );
}

const mapStateToProps = (store: {loading: LoadingState}) : LoadingProps => ({
    loadingState: store.loading
})
export default connect(mapStateToProps)(Loading)
;