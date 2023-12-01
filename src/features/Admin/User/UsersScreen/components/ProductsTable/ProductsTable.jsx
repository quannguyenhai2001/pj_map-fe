import React from "react";

import { useTheme } from "@emotion/react";
import {
    Edit,
    Delete,
    SearchOff,
} from "@mui/icons-material";
import {
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    IconButton,
    TableContainer,
    CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

import AppTooltip from "components/AppTooltip/AppTooltip";

import { useStyles } from "../../UsersScreen.styles";

const ProductsTable = ({
    users,
    setUsers,
    setUserDeleteID,
    setOpenDeleteProductModal
}) => {
    const theme = useTheme();
    const classes = useStyles();

    const tableHeadContents = [
        {
            id: "thumbnail_url",
            label: "Ảnh",
            minWidth: 100,
        },
        {
            id: "email",
            label: "Email",
            minWidth: 120,
        },
    ];
    const isDisabledIcon = (users) => {
        const newProducts = users.filter(product => {
            return product.isSelected
        });
        if (newProducts.length > 0) {
            return true
        }
        return false
    }
    return (
        <Box>
            {!users.length ? (
                <Box textAlign="center" py={200} borderRadius={10} bgcolor="#f2f2f2">
                    <Typography>
                        <SearchOff fontSize="large" />
                    </Typography>
                    <Typography variant="h5">Không tìm thấy kết quả</Typography>
                </Box>
            ) : (
                <TableContainer
                    sx={{
                        borderTop: "none",
                        borderRadius: "5px",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        minWidth: 600,
                        minHeight: users.length >= 5 ? 450 : (users.length + 1) * 65,
                    }}
                >
                    <Table
                        stickyHeader
                        aria-label="sticky table"
                        className={classes.table}
                        size="small"
                    >
                        <TableHead>
                            <TableRow>
                                {tableHeadContents.map(columnContent =>

                                    <TableCell
                                        key={columnContent.id}
                                        align="center"
                                        sx={{
                                            minWidth: columnContent.minWidth,
                                            bgcolor: theme.palette.grey[400],
                                            fontWeight: "bold",
                                            borderTop: "none",
                                            height: "60px",
                                        }}
                                        rowSpan={2}
                                    >
                                        {columnContent.label}
                                    </TableCell>

                                )}

                                <TableCell
                                    colSpan={4}
                                    align="center"
                                    sx={{
                                        minWidth: 100,
                                        bgcolor: theme.palette.grey[400],
                                        fontWeight: "bold",
                                        borderTop: "none",
                                    }}
                                >
                                    Thao tác
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {users.map(product => (
                                <TableRow
                                    key={product.id}
                                    sx={{
                                        ":hover": {
                                            bgcolor: theme.palette.grey[200],
                                        },
                                    }}
                                >


                                    <TableCell align="center" size="small">
                                        {product.avatar ? (<CardMedia className={classes.rootCardMedia}
                                            component="img"
                                            height="70"
                                            image={product.avatar}
                                            alt="green iguana"
                                        />) : (
                                            <CardMedia className={classes.rootCardMedia}
                                                component="img"
                                                height="70"
                                                image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/users/Product17_2.webp'
                                                alt="green iguana"
                                            />
                                        )}
                                    </TableCell>

                                    <TableCell align="center" size="small">
                                        {product.email}
                                    </TableCell>


                                    <TableCell
                                        align="center"
                                        size="small"
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <Box display="flex" justifyContent="center">

                                            <AppTooltip title="Xóa">
                                                <IconButton
                                                    disabled={isDisabledIcon(users)}
                                                    onClick={() => {
                                                        setOpenDeleteProductModal(true)
                                                        setUserDeleteID(product.id)
                                                    }}

                                                >
                                                    <Delete />
                                                </IconButton>
                                            </AppTooltip>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <AppTooltip TooltipIcon={<Edit />} title="Edit" />
        </Box>
    );
};

export default ProductsTable;