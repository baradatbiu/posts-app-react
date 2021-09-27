import React from 'react';
import XInput from './UI/input/XInput';
import XSelect from './UI/select/Select';

function PostFilter({ filter, setFilter }) {

  return (
    <div>
      <XInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Search..."}
      />
      <XSelect
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
        defaultValue={"Sort"}
        options={[
          { value: "title", title: "By name" },
          { value: "body", title: "By desc" },
        ]}
      />
    </div>
  );
}

export default PostFilter;