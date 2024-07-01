export default function getListudentIds(students) {
    if (!Array.isArray(students)) {
       return [];
    }
    const ids = students.map((x) => x.id);
    return ids;
}
