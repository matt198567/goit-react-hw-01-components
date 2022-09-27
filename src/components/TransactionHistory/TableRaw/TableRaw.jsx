import PropTypes from 'prop-types';
import { Td, Tr } from './TableRaw.styled';

export const TableRaw = ({ item }) => {
  return (
    <Tr>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>
  );
};

TableRaw.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};
