import { StudentType } from "@/types/StudentType"

type Props = {
    i: StudentType[];
}

export const StudentTable = ({i,}: Props) => {
    return (
        <table className="w-full border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800 bg-color-">
                   <th className="p-3 border-b border-red-500">Nome</th>
                   <th className="p-3 border-b border-red-500">Status</th>
                   <th className="p-3 border-b border-red-500">Grade 1</th>
                   <th className="p-3 border-b border-red-500">Grade 2</th>
                   <th className="p-3 border-b border-red-500">Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {i.map(all => (
                    <tr key={all.id} className="text-gray-800 bg-gray-600 border-b border-gray-800">
                        <td className="p-3 flex items-center">
                            <img src={all.avatar} alt={all.name}  className="w-10 h-10 rounded-full mr-3"/>
                            <div>
                                <div className="font-bold">{all.name}</div>
                                <div>{all.email}</div>
                            </div>
                        </td>
                        <td>
                            {all.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs ">Ativo</div>}
                            {!all.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs ">Inativo</div>}
                        </td>
                        <td>{all.grade1}</td>
                        <td>{all.grade2}</td>
                        <td>{all.active ? ((all.grade1 + all.grade2) / 2).toFixed(1) : '---'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}