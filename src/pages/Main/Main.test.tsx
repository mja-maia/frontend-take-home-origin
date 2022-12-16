import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Main from './Main';
import { RecoilRoot } from 'recoil';
import userEvent from '@testing-library/user-event';

const renderMain = () => {
  return render(
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </ThemeProvider>
  );
};

describe('Main Component', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2022, 11, 1));
  });

  it('Should render Main component correctly', () => {
    const { getByRole } = renderMain();

    expect(
      getByRole('heading', { name: /let's plan your saving goal\./i })
    ).toBeInTheDocument();
  });

  it('Should render the amount default value correctly', () => {
    const { getByDisplayValue } = renderMain();

    const input = getByDisplayValue(/25,000/i);

    expect(input).toBeInTheDocument();
  });

  it('Should update the recoil state when the user type some value on input amout', () => {
    const { getByRole, getByDisplayValue } = renderMain();

    const input = getByRole('textbox');

    userEvent.clear(input);

    userEvent.type(input, '30000');

    expect(getByDisplayValue(/30,000/i)).toBeInTheDocument();
  });

  it('Should increase month counter when user press Arrow Right', () => {
    const { getByText, getByTestId } = renderMain();

    const container = getByTestId('container');

    fireEvent.keyDown(container, {
      key: 'ArrowRight',
      code: 39,
      charCode: 39,
    });

    expect(getByText(/2 monthly deposits/i)).toBeInTheDocument();
  });

  it('Should decrease month counter when user press Arrow Left', () => {
    const { getByText, getByTestId } = renderMain();

    const container = getByTestId('container');

    //increase counter
    fireEvent.keyDown(container, {
      key: 'ArrowRight',
      code: 39,
      charCode: 39,
    });

    //increase counter
    fireEvent.keyDown(container, {
      key: 'ArrowRight',
      code: 39,
      charCode: 39,
    });

    //increase counter
    fireEvent.keyDown(container, {
      key: 'ArrowRight',
      code: 39,
      charCode: 39,
    });

    //decrease counter
    fireEvent.keyDown(container, {
      key: 'ArrowLeft',
      code: 37,
      charCode: 37,
    });

    expect(getByText(/3 monthly deposits/i)).toBeInTheDocument();
  });

  it('Should increase month counter when user click on arrow right icon', () => {
    const { getByText } = renderMain();

    const rightArrowIcon = getByText(/arrow-right\.svg/i);

    userEvent.click(rightArrowIcon);

    expect(getByText(/2 monthly deposits/i)).toBeInTheDocument();
  });

  it('Should decrease month counter when user click on left right icon', () => {
    const { getByText } = renderMain();

    const leftArrowIcon = getByText(/arrow-left\.svg/i);
    const rightArrowIcon = getByText(/arrow-right\.svg/i);

    //increase counter
    userEvent.dblClick(rightArrowIcon);
    userEvent.dblClick(rightArrowIcon);

    //decrease counter
    userEvent.dblClick(leftArrowIcon);

    expect(getByText(/3 monthly deposits/i)).toBeInTheDocument();
  });

  it('Should calculate monthly amount correctly when the user on right arrow icon', () => {
    const { getByRole, getByText } = renderMain();

    const input = getByRole('textbox');

    userEvent.clear(input);

    userEvent.type(input, '30000');

    const rightArrowIcon = getByText(/arrow-right\.svg/i);
    userEvent.click(rightArrowIcon);

    const monthlyAmount = getByRole('heading', { name: /\$15,000/i });
    const monthlyDeposits = getByText(/2 monthly deposits/i);

    expect(monthlyAmount).toBeInTheDocument();
    expect(monthlyDeposits).toBeInTheDocument();
  });

  it('Should calculate monthly amount correctly when the user on right arrow icon', () => {
    const { getByRole, getByText } = renderMain();

    const input = getByRole('textbox');

    userEvent.clear(input);

    userEvent.type(input, '35500.5');

    const rightArrowIcon = getByText(/arrow-right\.svg/i);
    const leftArrowIcon = getByText(/arrow-left\.svg/i);

    //increase month counter
    userEvent.dblClick(rightArrowIcon);
    //increase month counter
    userEvent.dblClick(rightArrowIcon);

    //decrease month counter
    userEvent.click(leftArrowIcon);

    const monthlyAmount = getByRole('heading', { name: /\$8,875.13/i });
    const monthlyDeposits = getByText(/4 monthly deposits/i);

    expect(monthlyAmount).toBeInTheDocument();
    expect(monthlyDeposits).toBeInTheDocument();
  });
});
