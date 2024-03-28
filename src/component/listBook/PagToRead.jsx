import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// Assuming you have an array of objects representing your read-list books with properties 'bookName' and 'totalPages'
const readListBooks = [
  { bookName: 'Book A', totalPages: 200 },
  { bookName: 'Book B', totalPages: 300 },
  { bookName: 'Book C', totalPages: 150 },
  // Add more book objects as needed
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToReadPage() {
  return (
    <BarChart
      width={1000}
      height={400}
      data={readListBooks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis dataKey="totalPages" />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readListBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
}
