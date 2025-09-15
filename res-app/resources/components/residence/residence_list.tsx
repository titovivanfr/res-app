import { ResidenceIntreface } from '@/types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
interface ResidenceListProps {
    residences: ResidenceIntreface[];
}
export function ResidenceList({
    residences,
}: ResidenceListProps): React.ReactElement {
    return (
        <>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                }}
                aria-label="contacts"
            >
                {residences.map((residence) => (
                    <ListItem
                        key={residence.id}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText
                                className="text-fourth"
                                primary={`${residence.number} ${residence.way}, ${residence.street}, ${residence.city}`}
                                secondary={`${residence.postal_code}, ${residence.country}`}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
