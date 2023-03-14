import { Table, TableCell, TableRow } from 'components/Table';
import { StoryContainer } from '../../../.storybook/StoryContainer';
import { TableBody, TableHead, TableHeadCell } from './Table';

export default {
  title: 'Table',
};

export const Default = () => (
  <StoryContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Country</TableHeadCell>
          <TableHeadCell>Capital</TableHeadCell>
          <TableHeadCell>Population</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Portugal</TableCell>
          <TableCell>Lisbon</TableCell>
          <TableCell>10 million</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brazil</TableCell>
          <TableCell>Brasilia</TableCell>
          <TableCell>214 million</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryContainer>
);
