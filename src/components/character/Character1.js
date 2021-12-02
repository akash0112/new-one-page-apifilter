import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallcharacters } from '../../redux/action';
const Character = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const a = () => {
      dispatch(getallcharacters());
    };
    a();
  }, [dispatch]);
  const character = useSelector(state => state.character.character[0])
    return (
        <div>
          <h1>Character</h1> 
          {
                character?character.map((c)=><h1 key={c._id}>{c.name}</h1>):"data not found"
            }
        </div>
    )
}

export default Character
