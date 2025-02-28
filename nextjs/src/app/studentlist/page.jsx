import Link from 'next/link';
export default function StudentList (){
    return (
        <>
        this is a student list component
        <ul>
            <li>
                <Link href="/studentlist/1">Anil</Link>
            </li>
            <li> <Link href="/studentlist/2">Tom</Link></li>
            <li> <Link href="/studentlist/3">Sam</Link></li>
            <li> <Link href="/studentlist/4">Bob</Link></li>
        </ul>
        </>
    )
}