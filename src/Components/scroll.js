const scrollTo = () => {
    const myRef = userRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()
}

export {scrollTo} from './scroll'