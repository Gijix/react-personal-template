const Counter: FC = () => {
  const [num, setNum] = useState(0)

  return (
    <div className="flex flex-col justify-center text-white space-y-3">
      <div className="flex flex-row space-x-8">
        <button className="operator" onClick={() => setNum(num + 1)}>+</button>
        <button className="operator" onClick={() => setNum(num - 1)}>-</button>
      </div>
      
      <p className="text-center"> {num} </p>
    </div>)
}

export default Counter