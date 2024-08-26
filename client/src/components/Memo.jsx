import { useState, useEffect } from "react"

function Memo({ state }) {
    const [memo, setMemo] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memoMessage = async () => {
            const memos = await contract.getMemo();
            setMemo(memos);
        };

        if (contract) {
            memoMessage();
        }
    }, [contract]);

    return (
        <>
            <p>Message</p>
            {memo.map((mem) => (
                <table key={mem.timestamp}>
                    <tbody>
                        <tr>
                            <td>{mem.name}</td>
                            <td>{mem.message}</td>
                            <td>{ new Date(memo.timestamp*1000).toLocaleString() }</td>
                            <td>{mem.from}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    );
}

export default Memo;
