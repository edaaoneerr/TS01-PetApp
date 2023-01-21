import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {expect} from 'expect';
import LoginForm from '../components/login-form/LoginForm';
import LoginScreen from '@screens/login/LoginScreen';

describe('Login Screen', () => {
    it('Should go to home page on Login', async () => {

        const navigation = {navigate: () => {}}
        jest.spyOn(navigation, 'navigate');
        const page = render(<LoginScreen navigation = {navigation}/>);

        const email = page.getByTestId("email");
        const password = page.getByTestId("password");
        
        fireEvent.changeText(email, "valid@email.com");
        fireEvent.changeText(password, "password");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(()=>expect(navigation.navigate).toHaveBeenCalledWith("HomeScreen"));
    }) 
    it ('Form must be invalid if email is empty', async () => {

        const formValues = {email: ""};
        await waitFor(()=>expect(LoginForm.isValidSync(formValues)).toBeFalsy());
    })
    it ('Form must be invalid if email is invalid', async () => {

        const formValues = {email: "invalid"};
        await waitFor(()=>expect(LoginForm.isValidSync(formValues)).toBeFalsy());
    })
    it ('Form must be invalid if password is empty', async () => {

        const formValues = {email: "valid@email.com", password: ""};
        await waitFor(()=>expect(LoginForm.isValidSync(formValues)).toBeFalsy());
    })
    it ('Form is valid', async () => {

        const formValues = {email: "valid@email.com", password: "validPassword"};
        await waitFor(()=>expect(LoginForm.isValidSync(formValues)).toBeTruthy());
    })
    it('Should show error message if email is touched and invalid', async () => {

        const navigation = {navigate: () => {}}
        jest.spyOn(navigation, 'navigate');
        const page = render(<LoginScreen navigation = {navigation}/>);
        const email = page.getByTestId("email");
        fireEvent.changeText(email, "valid@email.com");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);
        
        await waitFor(()=> page.getByTestId("errorEmail"));
    }) 
})
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ 
      navigate: jest.fn()
    }),
  }));
  jest.mock('react-native-paper', () => {

  });
  jest.mock('formik', () => {

  });
  import 'react-native-gesture-handler/jestSetup';

  jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
  
    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};
  
    return Reanimated;
  });
  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
  