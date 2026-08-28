import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Stack,
    TextField,
} from '@mui/material';

export const MAP_STYLE_PRESETS = [
    {
        label: 'BasemapDE',
        value: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_col.json',
    },
    {
        label: 'MapLibre Demo',
        value: 'https://demotiles.maplibre.org/style.json',
    },
];

const CUSTOM_VALUE = '__custom__';

type MapSettingsDialogProps = {
    open: boolean;
    mapStyle: string;
    onClose: () => void;
    onSave: (mapStyle: string) => void;
};

export default function MapSettingsDialog({
    open,
    mapStyle,
    onClose,
    onSave,
}: MapSettingsDialogProps) {
    const [styleUrl, setStyleUrl] = useState(mapStyle);

    const matchingPreset = MAP_STYLE_PRESETS.find((preset) => preset.value === styleUrl);
    const selectValue = matchingPreset ? matchingPreset.value : CUSTOM_VALUE;

    const handlePresetChange = (value: string) => {
        if (value !== CUSTOM_VALUE) {
            setStyleUrl(value);
        }
    };

    const handleClose = () => {
        setStyleUrl(mapStyle);
        onClose();
    };

    const handleSave = () => {
        if (!styleUrl.trim()) {
            return;
        }
        onSave(styleUrl.trim());
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Map Settings</DialogTitle>
            <DialogContent>
                <Stack spacing={2} sx={{ mt: 1 }}>
                    <TextField
                        select
                        label="Map style preset"
                        value={selectValue}
                        onChange={(event) => handlePresetChange(event.target.value)}
                        fullWidth
                    >
                        {MAP_STYLE_PRESETS.map((preset) => (
                            <MenuItem key={preset.value} value={preset.value}>
                                {preset.label}
                            </MenuItem>
                        ))}
                        <MenuItem value={CUSTOM_VALUE}>Custom</MenuItem>
                    </TextField>
                    <TextField
                        label="Map style URL"
                        value={styleUrl}
                        onChange={(event) => setStyleUrl(event.target.value)}
                        placeholder="https://example.com/style.json"
                        fullWidth
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}
