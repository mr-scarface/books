const fetchBooksQuery = ({ limit, pageNumber }) => {
  const query = [];

  const skip = pageNumber - 1 ? (pageNumber - 1) * limit : 0;

  query.push(
    ...[
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $facet: {
          total: [
            {
              $count: 'count',
            },
          ],
          data: [
            {
              $addFields: {
                _id: '$_id',
              },
            },
          ],
        },
      },
      {
        $unwind: '$total',
      },
      {
        $project: {
          books: {
            $slice: [
              '$data',
              skip,
              {
                $ifNull: [limit, '$total.count'],
              },
            ],
          },
          pageNumber: {
            $literal: pageNumber,
          },
          hasNextPage: {
            $lt: [limit * pageNumber, '$total.count'],
          },
          totalPages: {
            $ceil: {
              $divide: ['$total.count', limit],
            },
          },
          total: '$total.count',
        },
      },
    ]
  );

  return query;
};

module.exports = { fetchBooksQuery };
