import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({ pageCount }) {
  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} variant="outlined" defaultPage={7} siblingCount={3} boundaryCount={0} />
    </Stack>
  );
}
