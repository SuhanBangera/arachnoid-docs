export default function (id: string, behavior?:ScrollBehavior) {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior });
}