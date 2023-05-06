export default function (id: string, behavior:'smooth'|'auto'|'instant'='smooth') {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior });
}